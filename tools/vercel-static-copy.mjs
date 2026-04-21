import { cp, rm } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const sourceDir = path.join(repoRoot, 'apps', 'web', 'dist');
const outDir = path.join(repoRoot, 'public');

await rm(outDir, { recursive: true, force: true });
await cp(sourceDir, outDir, { recursive: true });

