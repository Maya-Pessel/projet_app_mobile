import { Text, Center } from "native-base";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("Private"); // 

    return (
        <Center h="full">
            <Text fontSize={18}>{t("home.head_title")}</Text>
        </Center>
    );
}

export default Home;
