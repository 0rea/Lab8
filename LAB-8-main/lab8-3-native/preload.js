const { contextBridge, ipcRenderer } = require('electron');

console.log('🌉 [PRELOAD] ตั้งค่า Native APIs...');

// เปิดเผย Native APIs ให้ Renderer ใช้
contextBridge.exposeInMainWorld('nativeAPI', {
  // 📁 File Operations
  openFile: () => {
    console.log('📁 [PRELOAD] เปิดไฟล์...');
    return ipcRenderer.invoke('open-file');
  },
  
  saveFile: (content, fileName) => {
    console.log('💾 [PRELOAD] บันทึกไฟล์...');
    return ipcRenderer.invoke('save-file', { content, fileName });
  }
});

console.log('✅ [PRELOAD] Native APIs พร้อมใช้งาน');