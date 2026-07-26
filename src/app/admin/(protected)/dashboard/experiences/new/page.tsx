"use client";

import React from "react";
import { createExperienceAction } from "@/features/admin/actions/manage-experiences";
import ExperienceForm from "@/features/admin/components/ExperienceForm";

export default function NewExperiencePage() {
  return (
    <div className="max-w-2xl space-y-6" id="new-experience-page">
      <div>
        <h1 className="text-2xl font-bold text-white">إضافة تجربة جديدة / Add New Experience</h1>
        <p className="text-gray-400 text-sm mt-1">
          Fill in the details below. The experience cover image will be uploaded directly to Supabase Storage.
        </p>
      </div>

      <ExperienceForm mode="create" submitAction={createExperienceAction} />
    </div>
  );
}
