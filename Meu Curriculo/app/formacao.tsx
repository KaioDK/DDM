import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Formacao() {
    return (
        <View style={styles.container}>
            <Link href="/" style={styles.button}> Voltar para página inicial </Link>
            <Link href="/sobre" style={styles.button}> Sobre mim </Link>
            <Link href="/habilidades" style={styles.button}> Habilidades </Link>
            <Text style={styles.text2}> <br/> Formações </Text>
            <Text style={styles.text}>
                🎓 Formação Acadêmica <br />

                Bacharelado em Administração de Empresas <br />
                Universidade Fictícia do Brasil – São Paulo/SP
                2019 – 2023 <br />
                Curso Técnico em Informática <br />
                Instituto Técnico Imaginário – São Paulo/SP
                2016 – 2018 <br /><br />

                📚 Cursos Complementares <br />
                Excel Avançado – Fundação Bradesco (2022) <br />
                Introdução ao Desenvolvimento Web – Alura (2023) <br />
                Comunicação Empresarial – Senac (2021)
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
