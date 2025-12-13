# 📱 Mob-Jarvis Features & Architecture (Full Specification)

## 🏗️ System Architecture: The "Client-Cloud-Host" Model

Mob-Jarvis is designed to be a ubiquitous assistant that lives on your phone but controls your digital life across devices.

### **1. The Brain (Android Client - Kotlin)**
*   **Role:** Sensory Input & Local Execution.
*   **Core:** A background `Service` combined with an `AccessibilityService`.
*   **Responsibilities:**
    *   Listens to voice commands via speech recognition.
    *   Reads the Android screen content (OCR/Accessibility Node extraction) to understand context.
    *   Execution of local Android intents (Calling, Texting, Apps).
    *   Forwards "Heavy" or "PC" commands to the cloud.

### **2. The Nervous System (Firebase Cloud Firestore)**
*   **Role:** Real-time Synchronization Bus.
*   **Collection:** `jarvis_commands`
*   **Workflow:**
    1.  Android writes `{ "command": "open notepad", "status": "pending" }`.
    2.  PC Listener detects the new document immediately via WebSocket (Snapshot Listener).
    3.  PC executes and updates status to `"executed"`.

### **3. The Hands (Windows Host - Python)**
*   **Role:** Desktop Automation & Heavy Lifting.
*   **Core:** `firebase_listener.py` + `engine` module.
*   **Responsibilities:**
    *   Executes shell commands (`subprocess`).
    *   Controls GUI (`pyautogui`).
    *   Runs Python automation scripts.

---

## ⚡ Complete Feature List (Android)

### **🖥️ PC Control Bridge**
*   **Universal Command:** Say *"PC [Any Command]"* or *"Computer [Any Command]"* to instantly execute it on your Windows machine.
    *   *Examples:* "PC Open Chrome", "PC Shutdown", "PC Type Hello World".

### **💬 Communication & Social**
*   **WhatsApp Automation:**
    *   "WhatsApp video call [Name]"
    *   "WhatsApp voice call [Name]"
    *   "WhatsApp message [Name] saying [Message]"
*   **Phone & SMS:**
    *   "Call [Name]"
    *   "Text [Name] saying [Message]"
    *   *Context Memory:* "Call **him**" (calls the last person mentioned).

### **🧠 AI & Memory**
*   **RAG Memorization:** "Memorize this" (Reads attached file and stores it in vector database for future Q&A).
*   **Screen Reading:** "Read screen" (TTS of current visible text).
*   **Clipboard Manager:**
    *   "Copy this text" (Copies screen content).
    *   "Paste", "Clear clipboard".
    *   "Repeat last message".

### **📍 Navigation & Location**
*   **Quick Nav:** "Navigate to home".
*   **Local Search:** "Find near [Pizza/Gas Station]".
*   **Status:** "Where am I?", "My location".

### **⚙️ System Control (Advanced)**
*   **Connectivity:**
    *   "Turn on/off WiFi"
    *   "Turn on/off Bluetooth"
    *   "Turn on/off NFC"
    *   "Turn on/off Hotspot"
    *   "Turn on/off Mobile Data" (Root/ADB may be required for some).
    *   "Turn on/off Airplane Mode".
*   **Hardware:**
    *   "Turn on/off Flashlight".
    *   "Increase/Decrease Volume", "Mute", "Set volume to [X]".
    *   "Increase/Decrease Brightness", "Set brightness to [X]".
*   **Device Health:**
    *   "Battery level?", "RAM usage?", "Storage left?".

### **📂 File Management**
*   **Creation:** "Create file [Name] saying [Content]".
*   **Reading:** "Read file [Name]", "Open file [Name]".
*   **Listing:** "List files" (in Jarvis directory).

### **♿ Accessibility & Interaction**
*   **Hands-Free Navigation:**
    *   "Scroll up/down".
    *   "Swipe left/right".
    *   "Go back", "Go home", "Show recent apps".
    *   "Lock screen".
    *   "Take screenshot".
*   **Magic Click:** "Click [Text]" (Finds button with text "Submit" and clicks it).

### **⏰ Productivity**
*   **Alarms:** "Set alarm for [Time]".
*   **Timers:** "Set timer for [X] minutes".
*   **Calendar:** "Schedule [Event] for [Date]" (Uses AI to extract robust date/time details).

### **🚀 App Management**
*   **Smart Launch:** "Open [App Name]" (Fuzzy matches installed apps).
*   **Specifics:** "Open Instagram", "Open Calculator", etc.

### **🎵 Media Control**
*   "Play music", "Pause music".
*   "Next song", "Previous song".
*   "Play [Song] on YouTube".

### **🔍 Search**
*   "Google search [Query]".
*   "Search for [Query]".

---

## 🛠️ Tech Stack Details

### **Android Client**
*   **Kotlin Coroutines:** Asynchronous processing for UI smoothness.
*   **OkHttp:** Network requests.
*   **Firebase Firestore SDK:** Real-time database syncing.
*   **AccessibilityService API:** Enables screen reading, clicks, and global gestures.
*   **TextToSpeech (TTS):** Vocal feedback.
*   **SpeechRecognizer:** Built-in Android STT.

### **Windows Server**
*   **Python:** The core logic engine.
*   **Firebase Admin SDK:** Secure server-side database access.
*   **Subprocess:** Executing system shell commands.
*   **Eel:** HTML/CSS/JS frontend for the desktop assistant.
