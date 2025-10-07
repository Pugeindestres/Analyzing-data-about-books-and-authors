#!/usr/bin/env node

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'fs';
import analyzeBooks from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileName = process.argv[2];

if (!fileName) {
  console.error('Пожалуйста, укажите путь к JSON файлу');
  console.log('Пример: node bin/books.js __fixtures__/books1.json');
  process.exit(1);
}

try {
  const content = fs.readFileSync(path.join(
    __dirname,
    '..',
    fileName,
  ), 'utf-8');

  analyzeBooks(JSON.parse(content));
} catch (error) {
  console.error('Ошибка:', error.message);
  process.exit(1);
}
