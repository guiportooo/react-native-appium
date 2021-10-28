import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
const PORT = 4723;

const config = {
  platformName: 'Android',
  platformVersion: '11',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/debug/app-debug.apk',
  automationName: 'UiAutomator2',
};

const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(5000);
});

test('Test Accessibilty Id', async () => {
  expect(await driver.hasElementByAccessibilityId('title')).toBe(true);
});
