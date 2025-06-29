import React, {useState} from 'react'
import {Text, View, TextInput, TouchableOpacity, Switch} from 'react-native';
import ResultadoR3 from './ResultR3'
import styles from './style'

export default function Inputs() {

    const [v1, setV1] = useState(null)
    const [v2, setV2] = useState(null)
    const [v3, setV3] = useState(null)
    const [message, setMessage] = useState("Preecha os 3 campos");
    const [result, setResult] = useState(null);

    const [name, setName] = useState(null)
    const [enabled, setEnabled] = useState(false)

    function calcular() {
        
        if (enabled == false) {
            return setResult(((v1 * v3) / v2).toFixed(2))
        } else {
            return setResult(((v1 * v2) / v3).toFixed(2))
        }

    }
    
    function validation() {        
        if (v1 != null && v2 != null && v3 != null) {
            calcular()
            setV1(null)
            setV2(null)
            setV3(null)
            setMessage("O valor de X é")
            return
        }

        setResult(null)
        setMessage("Preencha os 3 campos")
    }

  return (
    <View style={styles.container}>
        <View style={styles.labels1}>
            <Text style= {styles.label}>Valor 1</Text>
            <Text style= {styles.label}>Valor 2</Text>
        </View>
        <View style={styles.inputs1}>
            <TextInput keyboardType="numeric" placeholder='1' onChangeText={setV1} value={v1} style= {styles.input}></TextInput>
            <TextInput keyboardType="numeric" placeholder='2' onChangeText={setV2} value={v2} style= {styles.input}></TextInput>
        </View>

        <View style={styles.labels2}>
            <Text style= {styles.label}>Valor 3</Text>
            <Text style= {styles.label}>Valor 4</Text>
        </View>

        <View style={styles.inputs2}>
            <Text style= {styles.valorX}>X</Text>
            <TextInput keyboardType="numeric" placeholder='4' onChangeText={setV3} value={v3} style= {styles.input}></TextInput>
        </View>

        <View style={styles.switchContainer}>
            <Text style= {styles.switchText}>Inversamente proporcional?</Text>
            <Switch 
                value = {enabled} onValueChange={() => setEnabled((previousState) => !previousState)}
            />
        </View>

        <TouchableOpacity style={styles.buttonCalc} onPress={() => validation()}>
            <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <View style={styles.containerResult}>
            <ResultadoR3 message={message} result={result}></ResultadoR3>
        </View>
    </View>
  );
}