import test from 'node:test';
import assert from 'node:assert/strict';
import { bytesToLatin1 } from '../src/documents/pdfTextExtract.mjs';

test('Hermes-safe Latin-1 decoding is byte preserving and does not require non-UTF-8 TextDecoder support', () => {
  const input = Uint8Array.from([0, 65, 127, 128, 255]);
  const output = bytesToLatin1(input);
  assert.equal(output.length, input.length);
  assert.deepEqual(Array.from(output, (character) => character.charCodeAt(0)), Array.from(input));
});

test('Hermes-safe Latin-1 decoding handles inputs larger than the spread argument safety chunk', () => {
  const input = new Uint8Array(0x8000 + 17);
  for (let i = 0; i < input.length; i += 1) input[i] = i & 0xff;
  const output = bytesToLatin1(input);
  assert.equal(output.length, input.length);
  assert.equal(output.charCodeAt(0x8000), input[0x8000]);
  assert.equal(output.charCodeAt(input.length - 1), input[input.length - 1]);
});
