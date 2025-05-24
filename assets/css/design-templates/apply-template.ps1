# Apply Design Template
# This script copies the selected design template to the main.css file

param (
    [Parameter(Mandatory=$true)]
    [ValidateSet("1", "2", "3", "4")]
    [string]$TemplateNumber
)

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootPath = Split-Path -Parent (Split-Path -Parent $scriptPath)

$templatePath = Join-Path $rootPath "assets\css\design-templates\design-template-$TemplateNumber.css"
$mainCssPath = Join-Path $rootPath "assets\css\main.css"

# Create backup of current main.css
$backupPath = Join-Path $rootPath "assets\css\main.css.bak"
Copy-Item -Path $mainCssPath -Destination $backupPath -Force

# Copy selected template to main.css
Copy-Item -Path $templatePath -Destination $mainCssPath -Force

Write-Host "Successfully applied Design Template $TemplateNumber!"
Write-Host "A backup of your previous main.css has been saved as main.css.bak"
