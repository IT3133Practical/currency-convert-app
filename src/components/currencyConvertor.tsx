import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, TextInput, Button } from 'react-native'

export default function currencyConvertor() {
    const [value, setValue] = useState<string>('')
    const [isVisible, setIsVisible] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string>('Option 1')

    const options = ['USD to LKR', 'LKR to USD']

    const handleSelect = (option: string) => {
        setSelectedOption(option)
        setIsVisible(false)
    }

    const getCurrencyValue = () => {
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
            
            {/* Convertor Options */}
            <View style={styles.container}>
                <Text style={styles.label}>Choose a Convertor:</Text>

                {/* Dropdown Button */}
                <TouchableOpacity onPress={() => setIsVisible(true)} style={styles.dropdown}>
                    <Text style={styles.dropdownText}>{selectedOption}</Text>
                </TouchableOpacity>

                {/* Modal for Options */}
                <Modal visible={isVisible} transparent animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <FlatList
                                data={options}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        onPress={() => handleSelect(item)}
                                        style={styles.option}
                                    >
                                        <Text style={styles.optionText}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </Modal>
            </View>

            <Button title="Convert" onPress={getCurrencyValue} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    dropdownText: {
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 10,
        padding: 10,
    },
    option: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    optionText: {
        fontSize: 16,
    },
})