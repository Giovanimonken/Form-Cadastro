import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Downloads/formCadastro/index.html');
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('oi');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('oi@email.com');
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('12345678');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await page.getByLabel('Nome:').click();
  await page.getByLabel('Nome:').fill('oi');
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('oi@email.com');
  await page.getByLabel('Senha:').click();
  await page.getByLabel('Senha:').fill('123456');
  await page.getByRole('button', { name: 'Enviar' }).click();
});