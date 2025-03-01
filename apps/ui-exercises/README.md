💡 Online Coding Test: Real-time Implementation Challenge

This test is designed to be completed under observation in a live coding environment (e.g., CodeSandbox, VSCode Live Share, CoderPad). The focus is on React Hooks, event handling, API integration, state management, and UI implementation.

📝 Task: Build a Searchable User List

📚 Requirements

1. Application Overview
   • Create a simple user list application that allows users to search and filter results dynamically.
   • Use TypeScript, React, React Hooks, Axios, Emotion for styling.

🚦 Functional Requirements

1. API Data Fetching
   • API Endpoint: Random User API
   • Fetch and display 20 users when the page loads.

2. Search Functionality
   • Implement a search bar where users can type a name to filter the list.
   • The list should dynamically update as the user types.

3. Sorting Feature
   • Provide a dropdown to sort users alphabetically (A-Z, Z-A).

4. User List Display
   • Display user details in a list format:
   • Name (First Name + Last Name)
   • Email
   • Profile Picture (Thumbnail)
   • Country

5. UI and Styling
   • Use Emotion to style the components.
   • Implement a responsive design that works on both desktop and mobile.

🎯 Implementation Tasks

1. API Data Fetching (useEffect + Axios)
   • Use useEffect to fetch user data when the component mounts.
   • Implement error handling and loading state.

2. Search Bar Implementation (useState + Filtering)
   • Implement a search input that filters the displayed users in real time.
   • The filtering should happen without additional API calls (use local state).

3. Sorting Functionality (Dropdown + useState)
   • Allow users to select sorting order from a dropdown (A-Z, Z-A).
   • Update the list dynamically when the sorting option changes.

4. UI Components

UserList.tsx
• Displays a list of users based on API data.

SearchBar.tsx
• Input field for filtering users dynamically.

SortDropdown.tsx
• Dropdown for sorting the user list.

UserCard.tsx
• Displays user details (Name, Email, Profile Picture, Country).

📂 Suggested Directory Structure

apps/
└─ coding-challenge/
├─ src/
│ ├─ app/
│ │ ├─ App.tsx
│ │ ├─ store.ts
│ │ ├─ hooks/
│ │ │ └─ useFetchUsers.ts
│ │ ├─ components/
│ │ │ ├─ UserList.tsx
│ │ │ ├─ UserCard.tsx
│ │ │ ├─ SearchBar.tsx
│ │ │ ├─ SortDropdown.tsx
│ │ ├─ styles/
│ │ │ ├─ globalStyles.ts
│ └─ index.tsx

⛑️ Acceptance Criteria 1. Functionality
• Users are fetched and displayed correctly.
• The search bar filters users dynamically.
• Users can be sorted in ascending or descending order.

    2.	Code Quality
    •	The code is modularized into components and hooks.
    •	API fetching is efficient and properly managed.
    •	Proper error handling is implemented.

    3.	UI/UX
    •	The UI is clean, simple, and responsive.
    •	Styling is done using Emotion.

⏰ Time Limit
• Live coding test: Should be completed within 45-60 minutes.
• Additional discussion: Be prepared to explain your approach and thought process after the implementation.

🔥 Bonus Points
• Implement a debounced search (i.e., reduce the number of renders when typing quickly).
• Use React Query or SWR instead of useEffect for data fetching.
• Add pagination to load users in batches.

This test will assess:
✅ Your ability to write clean, modularized React code.
✅ Your understanding of React Hooks and event handling.
✅ Your problem-solving and debugging skills.
✅ Your ability to communicate and explain your approach.

Are you ready? Start coding now! 🚀

Let me know if you need any clarifications or hints along the way! 😊
