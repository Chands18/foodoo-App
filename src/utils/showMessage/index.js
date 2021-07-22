import { showMessage as showToast, hideMessage } from "react-native-flash-message";


export const showMessage = (message, type) => {
    showToast({
      message,
      type: type === 'success' ? 'info' : 'danger',
    });
  }