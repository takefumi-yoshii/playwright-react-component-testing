import { test as baseTest, } from '@playwright/experimental-ct-react';
import { fixtures, TestingLibraryFixtures } from '@playwright-testing-library/test/fixture'
import App from './App';

const test = baseTest.extend<TestingLibraryFixtures>({
  ...fixtures,
  viewport: { width: 1024, height: 768 }
})
const { expect } = test

test('Link will be show on the mobile screen', async ({ mount, queries: { getByRole } }) => {
  const component = await mount(<App></App>);
  await expect(await getByRole('link')).toBeTruthy()
  await expect(component).toHaveScreenshot();
});
