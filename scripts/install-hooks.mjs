import { execFileSync } from "node:child_process";

function gitHooksPath() {
  try {
    return execFileSync("git", ["config", "--get", "core.hooksPath"], {
      encoding: "utf8",
    }).trim();
  } catch {
    return "";
  }
}

if (gitHooksPath()) {
  process.stdout.write(
    "Existing Git hooks path retained. Run npm run check before commits.\n",
  );
} else {
  execFileSync("lefthook", ["install"], { stdio: "inherit" });
}
