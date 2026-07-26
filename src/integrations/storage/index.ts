/**
 * IStorageGateway — File / Asset Storage Integration Interface
 * Phase 1: local file stub. Phase 2: Cloudinary / R2 / Supabase.
 */
export interface UploadResult {
  url: string;
  publicId: string;
}

export interface IStorageGateway {
  uploadFile(file: Buffer, filename: string, folder: string): Promise<UploadResult>;
  deleteFile(publicId: string): Promise<void>;
}

export class StubStorageGateway implements IStorageGateway {
  async uploadFile(_file: Buffer, filename: string, folder: string): Promise<UploadResult> {
    console.log("[Storage] uploadFile", folder, filename);
    return { url: `/uploads/${folder}/${filename}`, publicId: `${folder}/${filename}` };
  }
  async deleteFile(publicId: string): Promise<void> {
    console.log("[Storage] deleteFile", publicId);
  }
}

export { SupabaseStorageGateway } from "./supabase";

