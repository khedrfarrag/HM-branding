import { IStorageGateway, UploadResult } from "./index";
import { supabaseAdmin } from "@/repositories/supabase/client";

export class SupabaseStorageGateway implements IStorageGateway {
  private bucketName = "experiences";

  async uploadFile(file: Buffer, filename: string, folder: string): Promise<UploadResult> {
    // Generate a unique path: folder/timestamp_filename
    const cleanFilename = filename.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filePath = `${folder}/${Date.now()}_${cleanFilename}`;

    const { data, error } = await supabaseAdmin.storage
      .from(this.bucketName)
      .upload(filePath, file, {
        contentType: this.getContentType(filename),
        upsert: true,
      });

    if (error || !data) {
      throw new Error(error?.message || "Failed to upload file to Supabase Storage");
    }

    // Get public URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from(this.bucketName)
      .getPublicUrl(filePath);

    return {
      url: publicUrl,
      publicId: filePath,
    };
  }

  async deleteFile(publicId: string): Promise<void> {
    const { error } = await supabaseAdmin.storage
      .from(this.bucketName)
      .remove([publicId]);

    if (error) {
      console.error("[SupabaseStorage] Delete file failed:", error.message);
    }
  }

  private getContentType(filename: string): string {
    const ext = filename.split(".").pop()?.toLowerCase();
    if (ext === "jpg" || ext === "jpeg") return "image/jpeg";
    if (ext === "png") return "image/png";
    if (ext === "gif") return "image/gif";
    if (ext === "webp") return "image/webp";
    if (ext === "svg") return "image/svg+xml";
    return "application/octet-stream";
  }
}
