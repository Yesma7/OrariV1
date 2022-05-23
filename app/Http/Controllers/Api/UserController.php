<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;


class UserController extends Controller
{
    //Registrar
    public function register(Request $request) {
        $request->validate([
            'name_first' => 'required',
            'name_last' => 'required',
            'position' => 'required',
            'email' => 'required|email|unique:users',
            'password' => [
                'required',
                Password::min(8)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
            ],
            'password_confirmation' => 'required_with:password|same:password'
        ]);

        $user = new User();
        $user->name_first = $request->name_first;
        $user->name_last = $request->name_last;
        $user->position = $request->position;
        $user->email = $request->email;
        $user->password = Hash::make($request->password_confirmation);

        $user->save();

        return response()->json([
            'status' => 1,
            'msg' => 'Creado'
        ]);
    }

    //Login
    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', '=' , $request->email)->first();

        if(isset($user->id)) {
            if(Hash::check($request->password, $user->password)) {
                //Crear Token
                $token = $user->createToken("auth_token")->plainTextToken;

                return response()->json([
                    'status' => 1,
                    'msg' => 'Logueado'
                ]);
            } else {
                return response()->json([
                    'status' => 0,
                    'msg' => 'ErrorPassword'
                ]);
            }
        } else {
            return response()->json([
                'status' => 0,
                'msg' => 'NoRegistrado'
            ]);
        }
    }

    //Logout
    public function logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            'status' => 1,
            'msg' => 'Logout'
        ]);
    }
}
