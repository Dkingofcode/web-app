import { capitalizeAllFirstLetters, stringToUrlStart } from '@/apps/shared/helpers/transform';

interface Page {
  name: string;
  route: string;
}

interface AppInfo {
  id: number;
  name: string;
  pages: {
    [key: number]: Page;
  };
}

const appName = 'code collabo';

const urlStart = stringToUrlStart(appName);

const page: { [key: number]: string } = {
  1: 'overview',
  2: 'projects',
};

const appInfo: AppInfo = {
  id: 1,
  name: capitalizeAllFirstLetters(appName),
  pages: {
    1: {
      name: page[1],
      route: `${urlStart}/${page[1]}`,
    },
    2: {
      name: page[2],
      route: `${urlStart}/${page[2]}`,
    },
  },
};

export {
  appInfo,
  urlStart,
};
