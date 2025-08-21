import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Habilidades() {
    return (
        <View style={styles.container}>
            <Link href="/" style={styles.button}> Voltar para página inicial </Link>
            <Link href="/sobre" style={styles.button}> Sobre mim </Link>
            <Link href="/formacao" style={styles.button}> Formações </Link>
            <Text style={styles.text2}> <br /> Habilidades</Text>
            <Text style={styles.text}> 💻 Habilidades Técnicas <br />
                - Lógica de programação e estrutura de dados <br />
                - Experiência com JavaScript, TypeScript e React <br />
                - Criação de APIs REST com Node.js e Express <br />
                - Versionamento com Git e GitHub <br />
                - Conhecimento básico em bancos de dados (MySQL, MongoDB) <br />
                - Utilização de ferramentas como VS Code, Postman e Docker <br />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        textAlign: 'center',
    },
    text2: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
