import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { producePeriodicElements, setFirstName, setLastName } from './redux/appPeriodic';
import LoadingButton from './components/LoadingButton';
import { useCallback } from 'react';


// App startup function
function App() {
  const dispatch = useDispatch()
  const firstName = useSelector(state => state.names.firstName)
  const lastName = useSelector(state => state.names.lastName)
  const firstNameElement = useSelector(state => state.names.firstNameElement)
  const lastNameElement = useSelector(state => state.names.lastNameElement)
  const loading = useSelector(state => state.names.loading)

  //Submit form to get periodic table elements
  const breakifyUserWord = useCallback(async e => {
    e.preventDefault()
    if (!loading)
      dispatch(producePeriodicElements({firstName, lastName}))
  }, [dispatch, firstName, lastName, loading])

  //and display all user interface for this app 
  return (
    <form className={`main-breakify-word ${loading ? 'lock-submit' : ''}`} onSubmit={e => breakifyUserWord(e)}>
      <div>
        <h1><span className={firstNameElement}>{firstNameElement}</span>{firstName.replace(firstNameElement, '')}</h1>
        <h1><span className={lastNameElement}>{lastNameElement}</span>{lastName.replace(lastNameElement, '')}</h1>
        <div className='break-first-last-name'>
          <div>
            <label htmlFor='first-name'>First Name</label>
            <input id='first-name' placeholder='Enter first name' value={firstName} onChange={e => dispatch(setFirstName({firstName: e.target.value}))}/>
          </div>
          <div>
            <label htmlFor='last-name'>Last Name</label>
            <input id='last-name' placeholder='Enter last name' value={lastName} onChange={e =>dispatch(setLastName({lastName: e.target.value}))}/>
          </div>
        </div>
        <LoadingButton className='btn-breakify-word' buttonText='Breakify' loadingText='Breaking Word...' />
      </div>
    </form>
  );
}

export default App;
