import React, { useState } from 'react';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import { DashboardHeading, Input, Button, ProtectedRoute } from '../../components'
import useForm from '../../hooks/useForm';
import { validateEmail, validateText, validatePassword, validateAPIKey, isValid } from '../../lib/validation';

function AccountSettings() {
    const {
        formInputs: personalInfo, 
        setFormInputs: setPersonalInfo, 
        handleChange: handlePersonalInfoFormChange
    } = useForm({
        username: "",
        email: ""
    });

    const {
        formInputs: password, 
        setFormInputs: setPassword,
        handleChange: handlePasswordFormChange
    } = useForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [apiKey, setApiKey] = useState("");

    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [currentPasswordError, setCurrentPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [apiKeyError, setApiKeyError] = useState("");

    const [personalInfoLoadingState, setPersonalInfoLoadingState] = useState(false);
    const [passwordLoadingState, setPasswordLoadingState] = useState(false);
    const [apiLoadingState, setApiLoadingState] = useState(false);

    // Update Personal Details
    async function updatePersonalDetails(e) {
        e.preventDefault();

        if(isValid(personalInfo) && !usernameError && !emailError) {
            // Set loading state to true
            setPersonalInfoLoadingState(true);

            try { 
                console.log("updating user personal details");
            } catch(error) {
                return error;
            } finally {
                setTimeout(() => setPersonalInfoLoadingState(false), 500);
            }
        }
    }

    // Update password
    async function updatePassword(e) {
        e.preventDefault();

        if(isValid(password) && !currentPasswordError && !newPasswordError && !confirmPasswordError) {
            // Set loading state to true
            setPasswordLoadingState(true);

            try { 
                console.log("updating password");
            } catch(error) {
                return error;
            } finally {
                setTimeout(() => setPasswordLoadingState(false), 500);
            }
        }
    }

    // Generate API
    async function generateAPIKey(e) {
        e.preventDefault();

        if(apiKey && !apiKeyError) {
            // Set loading state to true
            setApiLoadingState(true);

            try { 
                console.log("generating api key");
            } catch(error) {
                return error;
            } finally {
                setTimeout(() => setApiLoadingState(false), 500);
            }
        }
    }

    return (
        <ProtectedRoute>
            <section className='space-y-3 xs:space-y-4 md:space-y-6'>
                <DashboardHeading 
                    title="Account Settings"
                    subHeading="Lorem ipsum, dolor sit amet consectetur. adipisicing elit. Maxime nihil praesentium natus ullam odit."
                />

                <section className='w-full'>
                    <TabGroup className='space-y-5'>  
                        <div className='w-full overflow-x-scroll sm:overflow-x-auto'>
                            <TabList className="mt-4 sm:mt-8" variant="solid">
                                <Tab className="xs:py-1 text-xs px-2 sm:text-sm sm:px-2.5">Personal Information</Tab>
                                <Tab className="xs:py-1 text-xs px-2 sm:text-sm sm:px-2.5">Update Password</Tab>
                                <Tab className="xs:py-1 text-xs px-2 sm:text-sm sm:px-2.5">Generate API key</Tab>
                            </TabList>
                        </div>

                        <TabPanels className="w-full sm:w-5/6 lg:w-8/12">
                            {/* Personal Info Form */}
                            <TabPanel>
                                <form className='space-y-3' onSubmit={updatePersonalDetails}>
                                    <Input 
                                        label="Username"
                                        name="username"
                                        placeholder="cypherslopps"
                                        value={personalInfo.username}
                                        onChange={handlePersonalInfoFormChange}
                                        onBlur={() => validateText(personalInfo.username, setUsernameError, "Username field can't be empty", /^[^\d][\w]{5,}$/)}
                                        error={usernameError}
                                    />

                                    <Input 
                                        label="Email"
                                        name="email"
                                        placeholder="josephibok36@gmail.com"
                                        value={personalInfo.email}
                                        onChange={handlePersonalInfoFormChange}
                                        onBlur={() => validateEmail(personalInfo.email, setEmailError)}
                                        error={emailError}
                                    />

                                    <Button isLoading={personalInfoLoadingState}>Save Details</Button>
                                </form>
                            </TabPanel>

                            {/* Password Update Form */}
                            <TabPanel>
                                <form className='space-y-3' onSubmit={updatePassword}>
                                    <Input 
                                        label="Current password"
                                        type="password"
                                        name="currentPassword"
                                        placeholder="••••••••••••"
                                        value={password.currentPassword}
                                        onChange={handlePasswordFormChange}
                                        onBlur={() => validatePassword(password.currentPassword, setCurrentPasswordError)}
                                        error={currentPasswordError}
                                    />

                                    <Input 
                                        label="New password"
                                        type="password"
                                        name="newPassword"
                                        placeholder="••••••••••••"
                                        value={password.newPassword}
                                        onChange={handlePasswordFormChange}
                                        onBlur={() => validatePassword(password.newPassword, setNewPasswordError)}
                                        error={newPasswordError}
                                    />

                                    <Input 
                                        label="Confirm password"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="••••••••••••"
                                        value={password.confirmPassword}
                                        onChange={handlePasswordFormChange}
                                        onBlur={() => validatePassword(password.confirmPassword, setConfirmPasswordError, "confirm", password.newPassword)}
                                        error={confirmPasswordError}
                                    />

                                    <Button isLoading={passwordLoadingState}>Update password</Button>
                                </form>
                            </TabPanel>

                            {/* Generate API Form */}
                            <TabPanel>
                                <form className='space-y-3' onSubmit={generateAPIKey}>
                                    <Input 
                                        label="Generate API Key"
                                        name="apiKey"
                                        placeholder="************************"
                                        value={apiKey}
                                        onChange={({ target }) => setApiKey(target.value)}
                                        onBlur={() => validateAPIKey(apiKey, setApiKeyError)}
                                        error={apiKeyError}
                                    />

                                    <Button isLoading={apiLoadingState}>Generate API</Button>
                                </form>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </section>
            </section>
        </ProtectedRoute>
    )
}

export default AccountSettings