import { test, expect } from "@playwright/test"

const UI_URL = "http://localhost:5173/"

test("should allow the user to sign in ", async ({ page }) => {
  // const context = await browser.newContext()
  // const page = await context.newPage()

  // context.addCookies([
  //   {
  //     name: "auth_token",
  //     value:
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ1OTgzZGVhZDFmMzZkZDgyY2FmN2IiLCJpYXQiOjE3MDg1MTMwMDQsImV4cCI6MTcwODU5OTQwNH0.Y2CJxQ-2c3iZyOi3QFxRsuTtgZdmbyC5cRUmaLxPsgM",
  //     domain: "localhost",
  //     path: "/",
  //   },
  // ])
  await page.goto(UI_URL)

  //get the sign in button
  await page.getByRole("link", { name: "Sign In" }).click()

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible()

  await page.locator("[name=email]").fill("2@2.com")
  await page.locator("[name=password]").fill("aaaaaa")

  await page.getByRole("button", { name: "Sign In" }).click()

  await expect(page.getByText("Sign In Successful!")).toBeVisible()

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible()
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible()
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible()
})

test("should allow user to register", async ({ page }) => {
  const testEmail = `test_register_${Math.floor(Math.random() * 90000) + 10000}@test.com`
  await page.goto(UI_URL)

  await page.getByRole("link", { name: "Sign In" }).click()
  await page.getByRole("link", { name: "Create an account here" }).click()
  await expect(page.getByRole("heading", { name: "Create an Account" })).toBeVisible()

  await page.locator("[name=firstName]").fill("test_firstName")
  await page.locator("[name=lastName]").fill("test_lastName")
  await page.locator("[name=email]").fill(testEmail)
  await page.locator("[name=password]").fill("password123")
  await page.locator("[name=confirmPassword]").fill("password123")

  await page.getByRole("button", { name: "Create Account" }).click()

  await expect(page.getByText("Registration Successs!")).toBeVisible()

  await expect(page.getByRole("link", { name: "My Bookings" })).toBeVisible()
  await expect(page.getByRole("link", { name: "My Hotels" })).toBeVisible()
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible()
})
