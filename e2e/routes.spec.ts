import { test, expect } from '@playwright/test'

const routes = ['/', '/loja', '/blog', '/eventos', '/contato', '/sobre', '/buzios', '/visitas', '/faq', '/membros']

for (const route of routes) {
  test(`route ${route} loads`, async ({ page }) => {
    const res = await page.goto(route)
    expect(res?.status()).toBe(200)
    await expect(page).toHaveTitle(/Casa do Mensageiro/)
  })
}

test('home has CTA WhatsApp', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: /WhatsApp/i })).toBeVisible()
})
