import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/auth/UseAuth';
import { useDeps } from '../../shared/DepContext';

export default function UseSignUp() {
    const {onLogin} = useAuth();
    const navigate = useNavigate();

    const [step,setStep]= useState(1);
  
    const handleContinue = () => {
        setStep(step + 1);
    }
  
    const handleBack =  () => {
      setStep(step - 1);
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    // const [photoBlob, setPhotoBlob] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [isLoading, setLoading] = useState(false);
    const [posts, setPosts] = useState({})
    useEffect(() => {
        if (email !== '' && password !== '' && location !== '' && name !== '') {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [email, password, location, name])

    const {signupProfileService} = useDeps();

    const onCreateProfile = async () => {
        setLoading(true);
        try {
            const response = await signupProfileService.postSignUp({
                email: email,
                password: password,
                name: name,
                location: location,
                // photo_blob
            });
            console.log(response.token);
            setPosts(response.token)
            console.log(posts);
        } catch (error) {
            console.log(error);
        } finally {
            console.log('clearance');
            setEmail('')
            setLocation('')
            setPassword('')
            setName('')
            // setPhotoBlob('')
            setLoading(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateProfile();
    }

    useEffect(() => {
        onLogin(posts)
    }, [posts])

    return (
        {handleContinue, handleBack, navigate, step, email, password, name, location, handleSubmit, buttonDisabled, setEmail, setLocation, setPassword, setName /*photo_blob*/}
    )
}
