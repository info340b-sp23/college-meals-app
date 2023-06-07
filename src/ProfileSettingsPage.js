import React, { useState } from "react";
import { Nav } from "./Nav";
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