// Script to update admin password in Supabase
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error("❌ Missing env vars");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function updateAdminPassword() {
  const adminEmail = "admin@hussammabrouk.com";
  const newPassword = "Kk98865113";

  // First find the user
  const { data: { users }, error: listErr } = await supabase.auth.admin.listUsers();
  if (listErr) { console.error("❌ List error:", listErr.message); process.exit(1); }

  const adminUser = users.find(u => u.email === adminEmail);
  if (!adminUser) {
    console.log(`⚠️  User ${adminEmail} not found. Creating...`);
    const { data, error } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: newPassword,
      email_confirm: true,
      user_metadata: { role: "admin" },
    });
    if (error) { console.error("❌ Create error:", error.message); process.exit(1); }
    console.log(`✅ Admin created! ID: ${data.user.id}`);
    return;
  }

  // Update password
  const { error: updateErr } = await supabase.auth.admin.updateUserById(adminUser.id, {
    password: newPassword,
    email_confirm: true,
  });

  if (updateErr) {
    console.error("❌ Update error:", updateErr.message);
    process.exit(1);
  }

  console.log(`✅ Password updated successfully!`);
  console.log(`   Email: ${adminEmail}`);
  console.log(`   Password: ${newPassword}`);
  console.log(`   User ID: ${adminUser.id}`);
}

updateAdminPassword();
