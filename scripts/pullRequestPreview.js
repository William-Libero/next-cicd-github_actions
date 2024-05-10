import { execSync } from "child_process";
import { encode } from "punycode";

console.log("[DEPLOY_PREVIEW]: START");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf-8" });
console.log(output);
console.log("[DEPLOY_PREVIEW]: END");
