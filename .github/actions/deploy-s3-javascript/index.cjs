const core = require('@actions/core');
const { exec } = require('@actions/exec');
function run() {
  // Get inputs
  const bucket = core.getInput('bucket-name', { required: true });
  const region = core.getInput('region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });
  
  //Upload files to S3 (this is a placeholder, you would implement the actual upload logic here)
  const s3Uri = `s3://${bucket}`;
  exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${region}`)
  
  core.notice('Deploying to S3...');
}

run();