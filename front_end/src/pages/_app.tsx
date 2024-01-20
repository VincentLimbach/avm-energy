import 'styles/global.css';
import type { AppProps } from 'next/app'
import { DefaultLayout } from "components/ui/layouts/Default";
import 'devextreme/dist/css/dx.light.css';

const App = ({ Component, pageProps }: AppProps) => {
    return <DefaultLayout>
        <Component {...pageProps} />
    </DefaultLayout>
}

export default App