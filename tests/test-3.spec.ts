import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('file:///C:/Users/Aluno_Noite/Downloads/formCadastro/index.html');
  await page.getByLabel('Nome:').click();
  await page.getByRole('button', { name: 'Enviar' }).click();
});