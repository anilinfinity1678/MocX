import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../../Login/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDoc, doc } from "firebase/firestore";

const Profile = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // check if the user is authenticated before fetching the data
        if (auth.currentUser) {
            getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
                if (docSnap.exists) {
                    setUser(docSnap.data());
                }
            });
        }
    }, []);

    useEffect(() => {
        if (selectedImg) {
            const uploadImg = async () => {
                const imgRef = ref(
                    storage,
                    `avatar/${new Date().getTime()} - ${selectedImg.name}`
                );
                const snap = await uploadBytes(imgRef, selectedImg);
                const url = await getDownloadURL(snap.ref);
                setImgUrl(url);
            };
            uploadImg();
        }
    }, [selectedImg]);

    return user ? (
        <div className="profile">
            <div className="profile-container">
                <div className="profile-image">
                    {imgUrl ? (
                        <img src={imgUrl} alt="Profile" />
                    ) : (
                        <div>
                            <label htmlFor="photo">Upload Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                id="photo"
                                onChange={(e) => {
                                    setSelectedImg(e.target.files[0]);
                                }}
                            />
                        </div>
                    )}
                </div>
                <div className="profile-text-container">
                    <h3 className="user-name">{user.userName}</h3>
                    <div className="user-details">
                        <p className="user-detail">User email: {user.email}</p>
                        <p className="user-detail">
                            User profession: {user.prof}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Profile;
