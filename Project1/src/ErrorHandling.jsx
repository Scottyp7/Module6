// add to main.jsx or App.jsx wrapped around top components
// to catch errors thrown by ANY children and render a fallback
// component instead of an error
// first do npm install react-error-boundary
import { ErrorBoundary } from 'react-error-boundary'
<ErrorBoundary FallbackComponent={ErrorMessage}>
    <App /> {/* can wrap App or other high-level parent components */}
</ErrorBoundary>

// add to ErrorMessage.jsx
function ErrorMessage({ error, resetErrorBoundary }) {
    console.error(error);
    
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    // Will work for errors caused by changing state, but not syntax errors
    return (
        <div className="ErrorMessage">
            <p>An error occurred:</p>
            <pre>{error.message}</pre>
            <button onClick={() => resetErrorBoundary()}>Try Again?</button>
        </div>);
}

export default ErrorMessage