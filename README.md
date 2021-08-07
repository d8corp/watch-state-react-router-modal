<a href="https://www.npmjs.com/package/watch-state">
  <img src="https://raw.githubusercontent.com/d8corp/watch-state/v3.3.3/img/logo.svg" align="left" width="90" height="90" alt="Watch-State logo by Mikhail Lysikov">
</a>

# &nbsp; @watch-state/react-router-modal

&nbsp;

[![NPM](https://img.shields.io/npm/v/@watch-state/react-router-modal.svg)](https://www.npmjs.com/package/@watch-state/react-router-modal)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@watch-state/react-router-modal)](https://bundlephobia.com/result?p=@watch-state/react-router-modal)
[![downloads](https://img.shields.io/npm/dm/@watch-state/react-router-modal.svg)](https://www.npmtrends.com/@watch-state/react-router-modal)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@watch-state/react-router-modal)
[![license](https://img.shields.io/npm/l/@watch-state/react-router-modal)](https://github.com/d8corp/watch-state-react-router-modal/blob/main/LICENSE)  

Pop-ups related to URL with [React 16.8+](https://reactjs.org) and [watch-state](https://www.npmjs.com/package/watch-state).

[![stars](https://img.shields.io/github/stars/d8corp/watch-state-react-router-modal?style=social)](https://github.com/d8corp/watch-state-react-router-modal/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/watch-state-react-router-modal?style=social)](https://github.com/d8corp/watch-state-react-router-modal/watchers)

### Install
npm
```bash
npm i @watch-state/react-router-modal
```
yarn
```bash
yarn add @watch-state/react-router-modal
```

### Usage
All modals should be placed into `Modals`.
```typescript jsx
import RouterModal, {Modals, OpenModal} from '@watch-state/react-router-modal'
import theme from '@watch-state/react-router-modal/theme/default.module.scss'

export default () => (
  <>
    <OpenModal id='test'>Open</OpenModal>
    <Modals className={theme.modals}>
      <RouterModal id='test' delay={300} classNames={theme}>
        Test modal
      </RouterModal>
    </Modals>
  </>
)
```

## Issues
If you find a bug, please file an issue on [GitHub](https://github.com/d8corp/watch-state-react-router-modal/issues)

[![issues](https://img.shields.io/github/issues-raw/d8corp/watch-state-react-router-modal)](https://github.com/d8corp/watch-state-react-router-modal/issues)
