import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Link href="/" style={styles.button}> Voltar para página inicial </Link>
            <Link href="/habilidades" style={styles.button}> Habilidades </Link>
            <Link href="/formacao" style={styles.button}> Formações </Link>
            <Text style={styles.text2}> <br /> Sobre mim </Text>
            <Text style={styles.text}>
                Profissional proativo, comunicativo e com  facilidade para trabalhar em equipe. <br />
                Tenho foco em resultados, bom relacionamento interpessoal e interesse contínuo por aprendizado e desenvolvimento.<br />
                Busco sempre alinhar meus objetivos profissionais com os valores da empresa, contribuindo com comprometimento e responsabilidade para o crescimento mútuo.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
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
