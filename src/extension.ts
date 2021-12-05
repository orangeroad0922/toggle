// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "toggle" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('toggle.toggle', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return null;
		}
		if (!editor.selection.isEmpty) {
			const start = editor.document.offsetAt(editor.selection.start);
			const end = editor.document.offsetAt(editor.selection.end);
			const text = editor.document.getText();
			const searchText = text.slice(start, end).trim();
			vscode.env.openExternal(vscode.Uri.parse("https://www.google.com/search?q=" +searchText +  "&hl=ja"));
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
