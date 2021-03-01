<?php


namespace App\Http\Controllers;


use App\Models\Cost;

class CostController extends Controller
{
    public function getCostsByUser($user_id) {
        $costs = Cost::all()->where("user_id", "=" , $user_id);
        return json_encode($costs);
    }



}
