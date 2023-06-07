import React  from "react";
import { Profile } from "./Profile";
import ProfileSettings from "./ProfileSettings";

function ProfileSettingsPage() {
    return (
        <div>
            <Profile />
            <ProfileSettings/>
        </div>
    );
}
export {ProfileSettingsPage};