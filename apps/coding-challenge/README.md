💡 Coding Challenge: Profile List Application

📝 Task: Build a Profile List Application

📚 Requirements

1. Application Overview
	•	Create a simple React application that fetches profile data from an API and displays it in a card format.
	•	Use TypeScript, React, React Hooks, Redux Toolkit, Axios, and Emotion for styling.

🚦 Functional Requirements

1. Data Fetching (API Integration)
	•	API Endpoint: Random User API
	•	Data Fetching Tool: Use Axios to fetch 10 user profiles.

2. UI Implementation
	•	Display profiles in a card format with the following information:
	•	Name: Full name (first name + last name)
	•	Email Address: Display user email
	•	Photo: Thumbnail image of the user
	•	Details Button: Clicking this button should open a modal displaying detailed information
	•	Implement a modal to show additional user details:
	•	Full name
	•	Address (Street, City, State, Country)
	•	Phone number
	•	Large profile picture

3. React Hooks Requirements
	•	Utilize useEffect to fetch data on initial render.
	•	Implement a custom hook (useFetchProfiles) to handle the API call and return loading, error, and data states.
	•	Use useState for managing local component state (e.g., modal open/close).

4. State Management with Redux
	•	Set up a Redux store using Redux Toolkit.
	•	Create a slice (profilesSlice.ts) to manage profile data.
	•	Handle loading, error, and success states through Redux.
	•	Implement asynchronous actions using createAsyncThunk for fetching data.

5. Styling with Emotion
	•	Use Emotion for styling components:
	•	Create styled components for Profile Card, Modal, and Buttons.
	•	Implement dynamic styles based on component props (e.g., modal visibility).
	•	Ensure the application is responsive and accessible (use semantic HTML and aria attributes).

🎯 Implementation Tasks

1. Redux Store Setup
	•	Create a profilesSlice with actions for fetchProfiles, setLoading, setError.
	•	Use createAsyncThunk to fetch data asynchronously.

2. Custom Hook: useFetchProfiles
	•	Implement a custom hook to abstract API fetching logic.
	•	Return an object with loading, error, and data states.

3. UI Components

ProfileCard.tsx
	•	Display user name, email, and thumbnail.
	•	Include a “View Details” button to open the modal.

ProfileModal.tsx
	•	Display detailed user information when the modal is open.
	•	Show a close button to dismiss the modal.

LoadingSpinner.tsx
	•	A simple spinner to display while data is loading.

4. Main Application (App.tsx)
	•	Integrate the useFetchProfiles hook to fetch data on component mount.
	•	Render the ProfileCard components in a grid layout.
	•	Implement error handling and loading states.

📂 Suggested Directory Structure

apps/
└─ coding-challenge/
    ├─ src/
    │   ├─ app/
    │   │   ├─ App.tsx
    │   │   ├─ store.ts             # Redux store setup
    │   │   ├─ slices/
    │   │   │   └─ profilesSlice.ts # Redux slice
    │   │   ├─ hooks/
    │   │   │   └─ useFetchProfiles.ts # Custom hook for data fetching
    │   │   └─ components/
    │   │       ├─ ProfileCard.tsx
    │   │       ├─ ProfileModal.tsx
    │   │       ├─ LoadingSpinner.tsx
    │   │       └─ styles/
    │   │           └─ globalStyles.ts # Emotion global styles
    │   └─ index.tsx
    └─ public/

⛑️ Acceptance Criteria
	1.	Functionality
	•	Profiles are fetched and displayed correctly.
	•	The modal displays detailed information when a card is clicked.

	2.	Code Quality
	•	The code is clean and modularized into components, hooks, and Redux slices.
	•	Proper error handling and loading states are implemented.

	3.	UI/UX
	•	The application is responsive and accessible.
	•	Emotion is used to apply dynamic and maintainable styles.

⏰ Time Allotment
	•	Homework-style: Approximately 3-4 hours.
	•	Live coding test: Complete the core features within 1-2 hours.

🔥 Bonus Points
	•	Add a search bar to filter profiles by name or email.
	•	Implement sorting options (e.g., sort by name, email).
	•	Improve modal animations using framer-motion or similar libraries.

