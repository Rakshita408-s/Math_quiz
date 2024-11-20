import React from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import CustomButton from '../Button';
import color from '../../themes/color';

const  CustomModal=({onPress})=> {
   
}
   
        return (
            <View style={styles.main}>
                <Modal
                    transparent={true}
                    visible={this.props.visibility}
                 
                    onRequestClose={this.props.onClose}>
                    <View style={styles.overlay} />
                    <View style={styles.modalContent}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.lockStyle} source={this.props.image} />
                        </View>
                        <Text style={styles.modalTextLocked}>{this.props.Heading}</Text>
                        <Text style={styles.modalText}>{this.props.text}</Text>
                       
                    </View>
                </Modal>
            </View>
        );
    


export default CustomModal;

const styles = StyleSheet.create({
    color:{
        backgroundColor:'#F6F7F7',
        color:color.black,   
    },
    overlay: {
        flex: 1,
        backgroundColor: color.overlay,
    },
    modalContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -150 }, { translateY: -160 }],
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        paddingBottom: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        width: '80%',
        maxWidth: 300,
    },
    modalText: {
        fontSize: 13,
        marginBottom: 20,
        textAlign: 'center',
        color: color.modalT,
        fontWeight: '400',
    },
    modalTextLocked: {
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 20,
        color: color.modal2fa,
    },
    lockStyle: {
        width: 50,
        height: 50,
    },
});
