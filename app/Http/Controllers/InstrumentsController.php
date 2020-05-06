<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InstrumentsController extends Controller
{

	public function set (Request $request)
	{
			$bpm = $request->input('bpm');
			return response()->json(['bpm' => $bpm]);
	}
}
