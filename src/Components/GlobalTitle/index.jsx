import Helmet from 'react-helmet';
//instalei a dependencia yarn add react-helmet
//obtive orientação no site https://dev.to/luispa/how-to-add-a-dynamic-title-on-your-react-app----3l0j
const TitleComponent = ({ title }) => {
    var defaultTitle = 'CLAN WAR: global sports cup';
    return (
        <Helmet>
            <title>{title ? title : defaultTitle}</title>
        </Helmet>
    );
};

export { TitleComponent };