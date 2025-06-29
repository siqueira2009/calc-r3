import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: 40,
        paddingTop: 40,
        marginTop: 50,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    inputs1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15
    },

    labels1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15,
    },

    inputs2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    labels2: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 15,
        paddingTop: 15
    },

    label: {
        width: '40%',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 20
    },

    input: {
        width: '40%',
        backgroundColor: '#f0f0f0',
        marginRight: 10,
        marginLeft: 10,
        paddingLeft: 15,
        borderRadius: 10,
        fontSize: 20,
    },

    valorX: {
        width: '40%',
        backgroundColor: '#f0f0f0',
        marginRight: 10,
        marginLeft: 10,
        paddingLeft: 15,
        borderRadius: 10,
        fontSize: 20,
        textAlignVertical: 'center',
        fontWeight: 'bold'
    },

    buttonCalc: {
        backgroundColor: '#FF0043',
        width: '40%',
        height: 'auto',
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 10,
        borderRadius: 15
    },

    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff'
    },

    containerResult: {
        width: '100%'
    },

    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    switchText: {
        width: '45%',
        marginRight: 10
    }
});

export default styles