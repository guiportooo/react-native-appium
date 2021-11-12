import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
const PORT = 4723;
const screenshotsArg = process.argv.find(arg =>
  arg.startsWith('--screenshots'),
);
const screenshotsLocation = screenshotsArg
  ? screenshotsArg.split('=')[1]
  : '__tests__/e2e';
console.log('screenshotsLocation', screenshotsLocation);

const config = {
  platformName: 'Android',
  platformVersion: '11',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/release/app-release.apk',
  automationName: 'UiAutomator2',
};

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(50000);
});

afterEach(async () => {
  await driver.sleep(6000);
  await driver.resetApp();
  await driver.sleep(6000);
});

afterAll(async () => {
  await driver.closeApp();
});

test('Test Accessibilty Id', async () => {
  const screenshot = await driver.takeScreenshot();
  require('fs').writeFile(
    `${screenshotsLocation}/acessibilityId.png`,
    screenshot,
    'base64',
    err => {
      if (err) {
        console.log(err);
      }
    },
  );

  expect(await driver.hasElementByAccessibilityId('title')).toBe(true);
});

test('Add tasks', async () => {
  const screenshot = await driver.takeScreenshot();
  require('fs').writeFile(
    `${screenshotsLocation}/addTasks.png`,
    screenshot,
    'base64',
    err => {
      if (err) {
        console.log(err);
      }
    },
  );

  const task1 = 'Task 1';
  const task2 = 'Task 2';

  await driver.elementByAccessibilityId('input').type(task1);
  await driver.elementByAccessibilityId('button').click();

  await driver.sleep(1000);

  await driver.elementByAccessibilityId('input').type(task2);
  await driver.elementByAccessibilityId('button').click();

  await driver.sleep(1000);

  const text1 = await driver.elementByAccessibilityId('text_1').text();
  const text2 = await driver.elementByAccessibilityId('text_2').text();

  expect(text1).toBe(task1);
  expect(text2).toBe(task2);
});

test('Complete task', async () => {
  const screenshot = await driver.takeScreenshot();
  require('fs').writeFile(
    `${screenshotsLocation}/completeTask.png`,
    screenshot,
    'base64',
    err => {
      if (err) {
        console.log(err);
      }
    },
  );

  const task1 = 'Task 1';
  const task2 = 'Task 2';

  await driver.elementByAccessibilityId('input').type(task1);
  await driver.elementByAccessibilityId('button').click();

  await driver.sleep(1000);

  await driver.elementByAccessibilityId('input').type(task2);
  await driver.elementByAccessibilityId('button').click();

  await driver.sleep(1000);

  await driver.elementByAccessibilityId('task_0').click();

  await driver.sleep(1000);

  expect(await driver.hasElementByAccessibilityId('text_1')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('text_2')).toBe(false);
});
