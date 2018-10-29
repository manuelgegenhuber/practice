<h1>NPM</h1>
<p>
...comes installed with Nodejs.
</p>
<br>
<table>
<tr>
<th>CLI-Command</th>
<th>Description</th>
</tr>
<tr>
<td><code>npm init -y<code></td>
<td>
Creates the package.json File.<br>
Asks some question about the project (e.g. author)<br>
<code>-y</code> is optional -> Answers the question with the defaults.
</td>
</tr>
<tr>
<td><code>npm config set init-</code>{entry}</td>
<td>
To change the default-configuration for a specific entry (e.g. descripton)<br>
<code>config</code> is optional<br>
{entry}: author-name, description or license, ...
</td>
</tr>
<tr>
<td><code>npm config set init-</code>{entry}</td>
<td>
To read the default-configuration for a specific entry (e.g. descripton)<br>
<code>config</code> is optional<br>
{entry}: author-name, description or license, ...
</td>
</tr>
<tr>
<td><code>npm install</code></td>
<td>
Creates the node_modules folder.
Installs all dependencies (+ dev-dependencies) from the package.json.<br>
<code>install</code> can be replaced with <code>i</code>
Add <code>-g</code> to install the package globally.
</td>
</tr>
<tr>
<td><code>npm install</code> {packageName}<code> @</code>{version}<code> <code>--save</code></code></td>
<td>
Installs {packageName} in node_modules with the specific {version}.<br>
<code>--save</code> -> (Optional) - saves dependency to package.json & package-lock.json.<br>
<code>--save-dev</code> -> Installs module as Dev-dependency.
</td>
</tr>
<tr>
<td><code>npm install --production</code></td>
<td>
Installs all packages except the Dev-dependencies.
</td>
</tr>
<tr>
<td><code>npm uninstall </code>{packageName}<code> --save</code></td>
<td>
Uninstalls the {packageName}.<br>
<code>--save</code> -> (Optional) - also deletes entry from package.json & package-lock.json. <br>
<code>--save-dev</code> -> (Option) - same as <code>--save</code> for Dev-dependencies.<br>
<code>uninstall</code> can be replaced with <code>un</code> , <code>remove</code> or <code>rm</code>
</td>
</tr>
<tr>
<td><code>npm update</code> {packageName}</td>
<td>
Updates packages to the newest version. & changes package.json<br>
It also installs missing packages.<br>
<code>--dev</code> to update Dev-dependencies.<br>
{packageName} -> (Optional) - Updates the {packageName} to the newest version.
</td>
</tr>
<tr>
<td><code>npm list</code></td>
<td>Lists all installed modules and their dependencies.</td>
</tr>
<tr>
<td><code>npm list</code></td>
<td>Lists all installed modules and their dependencies.</td>
</tr>
<tr>
<td></td><td></td>
</tr>
</table>
<p>Everytime node_modules or package.json changes -> package-lock.json gets created for strict dependencies.<br>
This has the advantage that other developers download the exact same dependency-version.<br>
</p>