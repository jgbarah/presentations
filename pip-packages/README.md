# Packaging Python Projects

These are some notes that I use in the workshops I facilitate,
about packaging Python projects as distributable files
(that is, producing distributions from projects).

## Some context

There are two major systems for producing distributions in Python:
[Python Packaging Authority](https://packaging.python.org/)
(pip packages) and [conda](https://conda.io/).
These notes are about the former.

Usually, you want to package a Python project,
including a hierarchy of packages (collections of modules),
with one or more scripts with act as drivers for it.
This will be the scenario described in this document.

Naming used for Python packaging may be a bit confusing.
Have at [Nomenclature](#nomenclature) for a reference to the names used in these notes.

## Selecting a name, structuring the project

Before starting to package,
you need to structure your code, so that there is a Python package,
one or more scripts for driving it, and maybe other stuff
(tests, data needed by the module, etc.).

You also need to think about naming.
The name of the Python distribution should be (as much as posible)
unique, and matching the name of the package, to avoid confusion.
Knowing that the name of the package is unique is difficult,
because as far as I know, there is no registry of Python package names.
So, you can only due your due diligence, some guessing, or both.
Knowing that the name of the distribution is unique is easier:
check in the [Pypi website](https://pypi.python.org/pypi),
or better, in the [Pypi Warehouse](https://pypi.org/)
(the work in progress system that will deprecate the current Pypi).

If a package name is already "taken" by someone in Pypi,
you can try to contact the person who registered that name
(use the Pypi Warehowse for that).
There is a
[conflict resolution PEP](https://www.python.org/dev/peps/pep-0541/)
in the works, as far as I know it is not yet in force.

If you want to use names with more than one word,
use `_` (underscore) to separate the words in the package name,
and `-` (hyphen) to separate the words in the distribution name.
Other combinations may work, but this one seems to be customary,
and minimizes surprises for users.

In the rest of this document, I will use `pkg_name` for
the package (collection of modules) name and `dist-name` for the
distribution name (distributable package).

## Layout of the project

I assume that the project source code is in a single directory
(in most cases a single git repository),
where there is nothing else than the code for the package.
Usually, it is structured as:

* `pkg_name` directory: the source code for the package
* `bin` directory: scripts (usually driving scripts)
* `tests` directory: tests (usually unit tests)
* `setup.py`: configuration for creating the distribution
* `setup.cfg`: some extra configuration that may be needed
* `Manifest.in`: to list additional files not automatically included

In addition, it is convenient to have:

* `module_name/_version.py`: file with the version of the package,
with a content such as:

```
# Versions compliant with PEP 440 https://www.python.org/dev/peps/pep-0440
__version__ = "0.30.23"
```

* `README.md`: file with the description of the package,
which will be converted to README.rst (rst is the traditional format in Pypi,
  although now Markdown is also supported).

Templates for most the files listed above can be found in the
[PyPA sample Python project](https://github.com/pypa/sampleproject).

As a result of building the distributions, usually the following
directories are created:

* `build` directory: used to build the package
* `dist` directory: used to store the resulting packages

## Creating and uploading packages to Pypi

First of all, ensure you have Python installed (of course),
and that `pip` is available for that installation.
If not, follow instructions in
[Requirements for installing packages](https://packaging.python.org/tutorials/installing-packages/#requirements-for-installing-packages).

Now, assuming `dir` is the directory with your project,
with the above layout, and configuration files, you can type:

```bash
$ python3 -m venv /tmp/pip
$ source /tmp/pip/bin/activate
(pip) $ pip install --upgrade pip setuptools wheel pandoc
(pip) $ cd dir
(pip) $ rm -rf build dist
(pip) $ python setup.py sdist
(pip) $ python setup.py bdist_wheel
```

This will produce your distributions (a source distribution, `sdist`,
and a binary distribution in wheel format, `bdist_wheel`) in the
`dist` directory.

## Installing with pip from a directory

Once you have produced your distributions, you can test
them by installing them in a fresh virtual environment. For that,
you can use the `--no-index --find-links` options.
For example (asuming newly created distributions are in
`dir/dist`):

```bash
$ python3 -m venv /tmp/test
$ source /tmp/test/bin/activate
(test) pip install --no-index --find-links dir/dist
```

## Installing in development mode and usual workflow

If you have a project configured for producing distributions,
you can install it in the current virtual environment in
development (editable) mode. In this mode, the project
is installed in a way that any modification to its files
is immediately used in the next excution, even if no new
reinstallation is done. In other words, you can just
edit the files, run anything using the project
(for instance running a script that imports any of its modules),
and the edited version will be used.

For installing in developer mode, move to the project directory
and type (notice the dot at the end of the line):

```bash
$ pip install -e .
```

This will install the project in development mode, and
all its dependencies as specified in the project configuration,
downloading them from Pypi.

The  usual workflow using this development mode is:

* Configure the project for producing distributions
* Install it in development mode
* Work with the project: edit any file, test the changes, etc.
* When the project is ready for creating a new distribution,
just create it and upload it to Pypi.

## Uploading packages to Pypi

The recommended program for uploading distributions to Pypi is
[twine](https://pypi.python.org/pypi/twine). In a virtual environment
(for example, the one used for building the distributions),
assuming current directory is `dir`, just type:

```
(pip) $ pip install --upgrade twine
(pip) $ twine upload dist/*
```

The latest one needs a working twine configuration for credentials to Pypi,
including the user and password to upload to Pypi.
If it is not previously configured, it will just ask for those credentials.

## Documentation

* [Packaging and Distributing Projects](https://packaging.python.org/tutorials/distributing-packages/)

## Nomenclature

* Project: the directory containing the source code to be packaged,
including the modules, the scripts, etc.
* Module: a file that can be imported by a Python script or other module.
* Package: a collection of modules, usually as a hierarchy of directories
* Distribution: a distributable version of a project,
usually including a collection of modules (usually, structured as a package),
scripts, etc. In many contexts, "distributions" are named "packages",
but I try not to use the term in that sense here to avoid confusion with
"package" as a collection of modules (see above).
