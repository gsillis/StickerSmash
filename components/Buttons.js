import { StyleSheet , View, Pressable, Text } from "react-native";

export default function Button({ label }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button')}>
                <Text styles={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>         
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        merginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'Center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: '16'
    },
});