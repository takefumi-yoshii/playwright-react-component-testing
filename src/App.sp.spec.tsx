import { test as baseTest, } from '@playwright/experimental-ct-react';
import { fixtures, TestingLibraryFixtures } from '@playwright-testing-library/test/fixture'
import App from './App';

const test = baseTest.extend<TestingLibraryFixtures>({
  ...fixtures,
  viewport: { width: 375, height: 667 }
})
const { expect } = test

test('Link will be hidden on the mobile screen', async ({ mount, queries: { queryByRole } }) => {
  const component = await mount(<App></App>);
  await expect(await queryByRole('link')).toBeFalsy()
  await expect(component).toHaveScreenshot();
});
