import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { getAuth } from '@angular/fire/auth';
import { UserDto } from '../models/user-dto';
@Injectable({
    providedIn: 'root',
})
export class UsersService {
    usersRef: AngularFirestoreCollection<UserDto> = null;
    private dbPath = '/users';

    constructor(
        private db: AngularFirestore,
        private firestore: Firestore,
    ) {
        this.usersRef = db.collection(this.dbPath);
    }

    async getAll(): Promise<UserDto[]> {
        const users: UserDto[] = [];
        const querySnapshot = await getDocs(collection(this.firestore, 'users'));
        querySnapshot.forEach((document) => {
            users.push(document.data as unknown as UserDto);
        });
        return users;
    }

    async findOne(uid: string): Promise<UserDto> {
        let getUser: UserDto = {} as UserDto;
        const docRef = doc(this.firestore, 'users', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            getUser = docSnap.data() as UserDto;
        } else {
            getUser = {} as UserDto;
        }
        return getUser;
    }

    async getCurrentUser(): Promise<UserDto> {
        let currentUser: UserDto = {} as UserDto;
        const auth = await getAuth();
        if (auth.currentUser)
            currentUser = await this.findOne(auth.currentUser.uid);
        return currentUser;
    }

    async create(userDto: UserDto): Promise<void> {
        return await setDoc(doc(this.firestore, 'users', userDto.uid), Object.assign({}, userDto));
    }

    async delete(id: string): Promise<void> {
        return await this.usersRef.doc(id).delete();
    }
}
