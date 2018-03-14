# Building Python packages

There are two major packaging systems in Python: pip and conda.
This is about pip packages.

Usually, you want to package a Python module with one or more scripts
with act as drivers for that module.
This will be the scenario described in this document.

## Before you start

You need to restructure your code, so that there is a Python module,
one or more scripts for driving it, and maybe other stuff
(tests, data needed by the module, etc.).

You also need to think about naming.
The name of the Python module should be (as much as posible)
unique, and matching the name of the package, to avoid confusion.
Knowing that the name of the module is unique is difficult,
because as far as I know, there is no registry of Python modules.
So, you can only due your due diligence, some guessing, or both.
Knowing that the name of the package is unique is easier:
check in the [Pypi website](https://pypi.python.org/pypi),
or better, in the [Pypi Warehouse](https://pypi.org/)
(the work in progress system that will deprecate the current Pypi).

If a package name is already "taken" by someone in Pypi,
you can try to contact the person who registered that name
(use the Pypi Warehowse for that).
There is a conflict resolution PEP in the works,
as far as I know it is not yet in force.

If you want to use names with more than one word,
use `_` (underscore) to separate the words in the module name,
and `-` (hyphen) to separate the words in the package name.
Other combinations may work, but this one seems to be customary,
and minimizes surprises for users.

In the rest of this document, I will use `module_name` for
the module name and `pkg-name` for the  package name.

## Layout of the source code

I assume that the source code is in a single git repository,
where there is nothing else than the code for the package.
Usually, it is structured as:

* `module_name` directory: the source code for the module
* `bin` directory: scripts (usually driving scripts)
* `tests` directory: tests (usually unit tests)
* `setup.py`: configuration for creating the package
* `setup.cfg`: some extra configuration that may be needed

In addition, it is convenient to have:

* `module_name/_version.py`: file with the version of the package,
with a content such as:

```
# Versions compliant with PEP 440 https://www.python.org/dev/peps/pep-0440
__version__ = "0.30.23"
```

* `README.md`: file with the description of the package,
which will be converted to README.rst (rst is the format in Pypi).

As a result of building the packages, usually the following is created:

* `build` directory: used to build the package
* `dist` directory: used to store the resulting packages

## Creating and uploading packages to Pypi

Assuming `dir` is the directory where all the stuff is,
for creating directories type:

```bash
$ python3 -m venv /tmp/pip
$ source /tmp/pip
(pip) $ pip install --upgrade pip setuptools wheel pandoc
(pip) $ cd dir
(pip) $ rm -rf build dist
(pip) $ python setup.py sdist
(pip) $ python setup.py bdist_wheel
```

## Uploading packages

In the same virtual environment, assuming current directory is `dir`:

```
(pip) $ pip install --upgrade twine
(pip) $ twine upload dist/*
```

The latest one needs a working twine configuration,
including the user and password to upload to Pypi.

## Documentation

* [Packaging and Distributing Projects](https://packaging.python.org/tutorials/distributing-packages/)
