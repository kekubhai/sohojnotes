import supabase from '../src/supabase/client';

async function main() {
  const bucket = process.env.NOTES_BUCKET || 'notes';
  try {
    const { data, error } = await supabase.storage.createBucket(bucket, { public: false });
    if (error) {
      console.error('Failed to create bucket:', error);
      process.exit(1);
    }
    console.log('Bucket created:', data);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
