/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should create 2 todo tasks', async () => {
    await element(by.id('input')).tap();
    await element(by.id('input')).typeText('Task 1');
    await element(by.id('button')).tap()

    await element(by.id('input')).tap();
    await element(by.id('input')).typeText('Task 2');
    await element(by.id('button')).tap()

    await expect(element(by.text('Task 1'))).toBeVisible()
    await expect(element(by.text('Task 2'))).toBeVisible()
  });

  it('should create 2 todo tasks and complete 1', async () => {
    await element(by.id('input')).tap();
    await element(by.id('input')).typeText('Task 1');
    await element(by.id('button')).tap()

    await element(by.id('input')).tap();
    await element(by.id('input')).typeText('Task 2');
    await element(by.id('button')).tap()

    await element(by.id('task_0')).tap()

    await expect(element(by.text('Task 2'))).toBeVisible()
  });

});
