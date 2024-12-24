import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'

export default function currencyConvertor() {
    const [value, setValue] = useState<string>('')

    const getCurrencyValue=()=>{
        const numericValue = parseFloat(value) || 0
        console.log('Converted Value:', numericValue)
    }

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Enter Amount"
                    keyboardType="numeric"
                    style={{ fontSize: 20, marginBottom: 20, borderBottomWidth: 1, padding: 5 }}
                    value={value}
                    onChangeText={setValue}
                />
            </View>

            <Button title="Convert" onPress={()=>{console.log(value)}} />
        </View>
    )
}